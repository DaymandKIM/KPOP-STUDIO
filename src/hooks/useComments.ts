import { useState, useEffect } from 'react';
import {
  collection, query, where, orderBy, onSnapshot,
  addDoc, deleteDoc, updateDoc, doc, serverTimestamp, arrayUnion, arrayRemove,
} from 'firebase/firestore';
import type { Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { User } from 'firebase/auth';

export interface Comment {
  id: string;
  channelId: string;
  userId: string;
  userName: string;
  userPhoto: string;
  text: string;
  timestamp: Timestamp | null;
  likes: string[];
  dislikes: string[];
}

export function useComments(channelId: string, user: User | null) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'comments'),
      where('channelId', '==', channelId),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(
        snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Comment))
      );
      setLoading(false);
    }, (error) => {
      console.error('Firestore error:', error);
      setLoading(false);
    });

    return unsubscribe;
  }, [channelId]);

  const addComment = async (text: string) => {
    if (!user || !text.trim()) return;
    await addDoc(collection(db, 'comments'), {
      channelId,
      userId: user.uid,
      userName: user.displayName ?? '익명',
      userPhoto: user.photoURL ?? '',
      text: text.trim(),
      timestamp: serverTimestamp(),
      likes: [],
      dislikes: [],
    });
  };

  const deleteComment = async (commentId: string) => {
    await deleteDoc(doc(db, 'comments', commentId));
  };

  const toggleLike = async (commentId: string, currentLikes: string[]) => {
    if (!user) return;
    const ref = doc(db, 'comments', commentId);
    const alreadyLiked = currentLikes.includes(user.uid);
    await updateDoc(ref, {
      likes: alreadyLiked ? arrayRemove(user.uid) : arrayUnion(user.uid),
      dislikes: arrayRemove(user.uid),
    });
  };

  const toggleDislike = async (commentId: string, _currentLikes: string[], currentDislikes: string[]) => {
    if (!user) return;
    const ref = doc(db, 'comments', commentId);
    const alreadyDisliked = currentDislikes.includes(user.uid);
    await updateDoc(ref, {
      dislikes: alreadyDisliked ? arrayRemove(user.uid) : arrayUnion(user.uid),
      likes: arrayRemove(user.uid),
    });
  };

  return { comments, loading, addComment, deleteComment, toggleLike, toggleDislike };
}
