'use client';

import React, { useState } from 'react';

// 埋め込み再生に対応したサンプル動画データ
const MOCK_REELS = [
  {
    id: '1',
    title: '【英語】日常で使える英単語とフレーズ解説',
    subject: '英語',
    author: '英語マスター',
    youtubeId: 'M7lc1UVf-VE',
    likes: 2530,
    comments: 142,
  },
  {
    id: '2',
    title: '【プログラミング】Webアプリの仕組み入門',
    subject: '情報',
    author: 'テック講師',
    youtubeId: 'jNQXAC9IVRw',
    likes: 1240,
    comments: 89,
  },
];

export default function ReelsPage() {
  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});

  const toggleLike = (id: string) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="h-screen w-full bg-black snap-y snap-mandatory overflow-y-scroll pb-16">
      {MOCK_REELS.map((reel) => (
        <div
          key={reel.id}
          className="relative h-full w-full snap-start flex items-center justify-center bg-gray-900 overflow-hidden"
        >
          {/* YouTube プレーヤー */}
          <div className="w-full h-full max-w-md mx-auto relative flex items-center justify-center">
            <iframe
              className="w-full h-full border-0"
              src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=0&controls=1&rel=0`}
              title={reel.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* オーバーレイ情報 */}
            <div className="absolute bottom-8 left-4 right-16 text-white pointer-events-none z-10 drop-shadow-md">
              <span className="inline-block bg-indigo-600 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                {reel.subject}
              </span>
              <h2 className="text-base font-bold line-clamp-2">{reel.title}</h2>
              <p className="text-xs text-gray-300 mt-1">@{reel.author}</p>
            </div>

            {/* 右側アクションボタン */}
            <div className="absolute right-3 bottom-16 flex flex-col items-center gap-5 z-10">
              <button
                onClick={() => toggleLike(reel.id)}
                className="flex flex-col items-center gap-1 text-white focus:outline-none"
              >
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-xl transition-transform active:scale-90 ${
                    liked[reel.id] ? 'bg-red-500 text-white' : 'bg-black/40 text-white backdrop-blur-md'
                  }`}
                >
                  ♥
                </div>
                <span className="text-xs font-medium drop-shadow">
                  {liked[reel.id] ? reel.likes + 1 : reel.likes}
                </span>
              </button>

              <button className="flex flex-col items-center gap-1 text-white focus:outline-none">
                <div className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-lg">
                  💬
                </div>
                <span className="text-xs font-medium drop-shadow">{reel.comments}</span>
              </button>

              <button className="flex flex-col items-center gap-1 text-white focus:outline-none">
                <div className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-lg">
                  ↗
                </div>
                <span className="text-xs font-medium drop-shadow">シェア</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
