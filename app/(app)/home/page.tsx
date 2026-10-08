'use client';

import React from 'react';

export default function HomePage() {
  return (
    <div className="p-4 max-w-md mx-auto min-h-screen pb-20">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800">ホーム</h1>
        <p className="text-xs text-gray-500">今日のおすすめ学習動画</p>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-sm">
          <h2 className="text-lg font-bold">今日の目標</h2>
          <p className="text-xs mt-1 opacity-90">動画を3本視聴して復習しよう！</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-sm font-bold text-gray-700 mb-2">おすすめの動画</h3>
          <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
            動画コンテンツ
          </div>
        </div>
      </div>
    </div>
  );
}
