import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, ThumbsUp, ThumbsDown, Trash2, Send, LogIn, LogOut, Loader2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useComments } from '../hooks/useComments';
import type { Timestamp } from 'firebase/firestore';

interface Props {
  channelId: string;
  accentColor?: string;
}

function timeAgo(ts: Timestamp | null, lang: string): string {
  if (!ts) return '';
  const diff = (Date.now() - ts.toMillis()) / 1000;
  if (diff < 60) return lang === 'ko' ? '방금 전' : 'Just now';
  if (diff < 3600) {
    const m = Math.floor(diff / 60);
    return lang === 'ko' ? `${m}분 전` : `${m}m ago`;
  }
  if (diff < 86400) {
    const h = Math.floor(diff / 3600);
    return lang === 'ko' ? `${h}시간 전` : `${h}h ago`;
  }
  const d = Math.floor(diff / 86400);
  return lang === 'ko' ? `${d}일 전` : `${d}d ago`;
}

const CommentSection: React.FC<Props> = ({ channelId, accentColor = '#00ffff' }) => {
  const { i18n } = useTranslation();
  const { user, loading: authLoading, signInWithGoogle, signOut } = useAuth();
  const { comments, loading: cmtLoading, addComment, deleteComment, toggleLike, toggleDislike } = useComments(channelId, user);
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const lang = i18n.language;

  const labels = {
    title: lang === 'ko' ? '댓글' : 'Comments',
    loginBtn: lang === 'ko' ? 'Google로 로그인' : 'Sign in with Google',
    loginDesc: lang === 'ko' ? '댓글을 남기려면 로그인하세요.' : 'Sign in to leave a comment.',
    placeholder: lang === 'ko' ? '댓글을 입력하세요...' : 'Write a comment...',
    submit: lang === 'ko' ? '등록' : 'Post',
    noComments: lang === 'ko' ? '첫 댓글을 남겨보세요!' : 'Be the first to comment!',
    deleteConfirm: lang === 'ko' ? '댓글을 삭제하시겠습니까?' : 'Delete this comment?',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || submitting) return;
    setSubmitting(true);
    await addComment(text);
    setText('');
    setSubmitting(false);
    textareaRef.current?.focus();
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm(labels.deleteConfirm)) return;
    await deleteComment(id);
  };

  return (
    <section className="glass-card rounded-[40px] p-8 md:p-10 border-white/5">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center border"
            style={{ background: `${accentColor}15`, borderColor: `${accentColor}40` }}
          >
            <MessageCircle className="w-5 h-5" style={{ color: accentColor }} />
          </div>
          <h3 className="text-2xl font-black text-white uppercase italic">
            {labels.title}
            {!cmtLoading && (
              <span className="ml-2 text-base font-mono text-slate-500">({comments.length})</span>
            )}
          </h3>
        </div>

        {/* Auth button */}
        {!authLoading && (
          user ? (
            <button
              onClick={signOut}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-mono text-slate-400 hover:text-white transition-all"
            >
              <img
                src={user.photoURL ?? ''}
                alt={user.displayName ?? ''}
                className="w-5 h-5 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="max-w-[100px] truncate">{user.displayName}</span>
              <LogOut className="w-3.5 h-3.5 shrink-0" />
            </button>
          ) : (
            <button
              onClick={signInWithGoogle}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              {/* Google icon */}
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <LogIn className="w-3.5 h-3.5" />
              {labels.loginBtn}
            </button>
          )
        )}
      </div>

      {/* Comment input */}
      {user ? (
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-3 items-start">
            <img
              src={user.photoURL ?? ''}
              alt={user.displayName ?? ''}
              className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-1 border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 flex gap-2">
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleSubmit(e as any);
                }}
                placeholder={labels.placeholder}
                rows={2}
                maxLength={500}
                className="flex-1 bg-white/5 border border-white/10 focus:border-white/30 rounded-2xl px-4 py-3 text-sm text-white placeholder-slate-500 resize-none focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!text.trim() || submitting}
                className="flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-widest transition-all disabled:opacity-40 disabled:cursor-not-allowed self-end"
                style={{ background: accentColor, color: '#000' }}
              >
                {submitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-3.5 h-3.5" />
                )}
                {labels.submit}
              </button>
            </div>
          </div>
          <p className="text-[10px] text-slate-600 font-mono mt-1.5 ml-11">Ctrl+Enter {lang === 'ko' ? '로 빠르게 등록' : 'to submit quickly'}</p>
        </form>
      ) : (
        !authLoading && (
          <div className="mb-8 flex items-center gap-3 p-4 bg-white/3 border border-white/8 rounded-2xl">
            <LogIn className="w-4 h-4 text-slate-500 shrink-0" />
            <p className="text-sm text-slate-500">{labels.loginDesc}</p>
            <button
              onClick={signInWithGoogle}
              className="ml-auto text-xs font-black underline text-slate-400 hover:text-white transition-colors whitespace-nowrap"
            >
              {labels.loginBtn}
            </button>
          </div>
        )
      )}

      {/* Comment list */}
      {cmtLoading ? (
        <div className="flex items-center justify-center py-10">
          <Loader2 className="w-6 h-6 animate-spin text-slate-500" />
        </div>
      ) : comments.length === 0 ? (
        <p className="text-center text-slate-600 font-mono text-sm py-10">{labels.noComments}</p>
      ) : (
        <ul className="space-y-5">
          {comments.map((c) => {
            const liked = user ? c.likes.includes(user.uid) : false;
            const disliked = user ? c.dislikes.includes(user.uid) : false;
            const isOwn = user?.uid === c.userId;

            return (
              <li key={c.id} className="flex gap-3 group/comment">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  {c.userPhoto ? (
                    <img
                      src={c.userPhoto}
                      alt={c.userName}
                      className="w-8 h-8 rounded-full object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-black text-white">
                      {c.userName.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <span className="text-sm font-black text-white">{c.userName}</span>
                    <span className="text-[10px] font-mono text-slate-600">{timeAgo(c.timestamp, lang)}</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed break-words">{c.text}</p>

                  {/* Actions */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => toggleLike(c.id, c.likes)}
                      disabled={!user}
                      className={`flex items-center gap-1 text-[11px] font-mono transition-colors disabled:cursor-not-allowed ${
                        liked ? 'text-neon-blue' : 'text-slate-600 hover:text-neon-blue'
                      }`}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${liked ? 'fill-neon-blue/30' : ''}`} />
                      {c.likes.length > 0 && <span>{c.likes.length}</span>}
                    </button>

                    <button
                      onClick={() => toggleDislike(c.id, c.likes, c.dislikes)}
                      disabled={!user}
                      className={`flex items-center gap-1 text-[11px] font-mono transition-colors disabled:cursor-not-allowed ${
                        disliked ? 'text-neon-pink' : 'text-slate-600 hover:text-neon-pink'
                      }`}
                    >
                      <ThumbsDown className={`w-3.5 h-3.5 ${disliked ? 'fill-neon-pink/30' : ''}`} />
                      {c.dislikes.length > 0 && <span>{c.dislikes.length}</span>}
                    </button>

                    {isOwn && (
                      <button
                        onClick={() => handleDelete(c.id)}
                        className="ml-auto opacity-0 group-hover/comment:opacity-100 flex items-center gap-1 text-[11px] font-mono text-slate-600 hover:text-red-400 transition-all"
                      >
                        <Trash2 className="w-3 h-3" />
                        {lang === 'ko' ? '삭제' : 'Delete'}
                      </button>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default CommentSection;
