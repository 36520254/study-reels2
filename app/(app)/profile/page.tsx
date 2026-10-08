'use client';

import React from 'react';

export default function ProfilePage() {
  return (
    <div className="p-4 max-w-md mx-auto min-h-screen pb-20">
      {/* ユーザー情報ヘッダー */}
      <div className="flex items-center gap-4 mb-6 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0">
          学
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-800">学習 太郎</h1>
          <p className="text-xs text-gray-500">高校2年生 • 理系コース</p>
        </div>
      </div>

      {/* 学習データ概要 */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="p-4 bg-indigo-50 rounded-xl text-center">
          <p className="text-xs text-indigo-600 font-medium">総学習時間</p>
          <p className="text-xl font-bold text-indigo-900 mt-1">12.5 <span className="text-xs">時間</span></p>
        </div>
        <div className="p-4 bg-emerald-50 rounded-xl text-center">
          <p className="text-xs text-emerald-600 font-medium">完了した動画</p>
          <p className="text-xl font-bold text-emerald-900 mt-1">24 <span className="text-xs">本</span></p>
        </div>
      </div>

      {/* 設定メニューなど */}
      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-gray-600 mb-2">アカウント設定</h2>
        {['学習目標の設定', 'お気に入り動画', '通知設定', 'ヘルプ・お問い合わせ'].map((item) => (
          <div key={item} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-50">
            <span className="text-sm font-medium text-gray-700">{item}</span>
            <span className="text-gray-400 text-xs">＞</span>
          </div>
        ))}
      </div>
    </div>
  );
}