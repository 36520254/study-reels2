'use client';

import React, { useState } from 'react';

// ダミーの動画データ
const ALL_VIDEOS = [
  { id: 1, title: '【高校数学】微分・積分の基本まとめ #1', tag: '数学', views: '1.2万回', duration: '5分' },
  { id: 2, title: '【英語】英単語 LEAP 効率的な暗記法', tag: '英語', views: '8,500回', duration: '8分' },
  { id: 3, title: '【物理】波の性質と公式の覚え方', tag: '理科', views: '5,000回', duration: '6分' },
  { id: 4, title: '【情報I】プログラミングの基礎知識', tag: '情報', views: '2.1万回', duration: '10分' },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 入力キーワードとタグによる絞り込み処理
  const filteredVideos = ALL_VIDEOS.filter((video) => {
    const matchesQuery = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? video.tag === selectedTag : true;
    return matchesQuery && matchesTag;
  });

  return (
    <div className="p-4 max-w-md mx-auto min-h-screen pb-20">
      <h1 className="text-xl font-bold mb-4 text-gray-800">動画・教材を探す</h1>
      
      {/* 検索バー */}
      <div className="relative mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="キーワードや科目で検索..."
          className="w-full px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* 人気の科目 */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-600 mb-2">人気の科目</h2>
        <div className="flex gap-2 flex-wrap">
          {['英語', '数学', '国語', '理科', '社会', '情報'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedTag === tag
                  ? 'bg-indigo-600 text-white'
                  : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* 検索結果 */}
      <div>
        <h2 className="text-sm font-semibold text-gray-600 mb-2">
          {searchQuery || selectedTag ? '検索結果' : '注目の学習動画'}
        </h2>
        <div className="space-y-3">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <div key={video.id} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-500 rounded-lg flex items-center justify-center text-xs font-bold shrink-0">
                  {video.tag}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">{video.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">再生回数 {video.views} • {video.duration}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xs text-gray-400 text-center py-8">該当する動画が見つかりませんでした。</p>
          )}
        </div>
      </div>
    </div>
  );
}