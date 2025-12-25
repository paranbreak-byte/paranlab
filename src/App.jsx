import React, { useState } from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Paran Lab</h1>
          <p className="text-gray-600">복잡한 고민을 명쾌한 데이터로 해결합니다.</p>
        </header>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">첫 번째 도구: AHP (계층 분석 과정)</h2>
          <p className="mb-6 text-gray-600 leading-relaxed">
            여러 가지 선택지 중에서 무엇이 최선인지 고민되시나요? 
            기준을 정하고 항목별로 비교하면 수학적으로 가장 완벽한 답을 찾아드립니다.
          </p>
          
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 mb-8">
            <h3 className="font-medium text-blue-800 mb-2">준비 중인 기능:</h3>
            <ul className="list-disc list-inside text-blue-700 space-y-1">
              <li>다기준 의사결정 (AHP)</li>
              <li>가중치 점수 모델</li>
              <li>SWOT 전략 분석</li>
            </ul>
          </div>

          <button 
            onClick={() => alert('곧 도구가 활성화됩니다!')}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
          >
            AHP 분석 시작하기 (준비 중)
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
