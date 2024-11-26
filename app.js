const pagePrefix = "page1"; // 1ページ目の識別子

document.getElementById('next-button').addEventListener('click', () => {
  window.location.href = "test2.html"; // 特定のページに進む
});

document.getElementById('prev-button').addEventListener('click', () => {
  window.location.href = "top.html"; // 特定のページに戻る
});

const quiz = [
  {
    question: '（A）に当てはまる語句を答えよ。',
    answers: [ '藤子・F・不仁雄', '手塚治虫', '藤子・F・不二雄', '赤塚不二夫'],
    correct: '藤子・F・不二雄'
  },
  {
    question: '（B）に当てはまる語句を答えよ。',
    answers: ['スペアポケット', '四次元ポケット', 'ひみつポケット', 'ひみつ道具格納ポケット'],
    correct: '四次元ポケット'
  },
  {
    question: '下線部①について、『大長編ドラえもん VOL.1』のタイトルを答えよ。',
    answers: [ 'のび太の恐竜', 'のび太の日本誕生', 'のび太の大魔境', 'のび太の宇宙開拓史'],
    correct: 'のび太の恐竜'
  },
  {
    question: '下線部②について、2005年4月以降ドラえもん役を演じている声優の名前を答えよ。',
    answers: [ '大原めぐみ', '大山のぶ代', '大谷育江', '水田わさび'],
    correct: '水田わさび'
  },
  {
    question: '下線部③について、2024年に公開された映画のタイトルを答えよ。',
    answers: ['のび太と空の理想郷', 'のび太の地球交響楽', 'のび太の月面探査記', 'のび太の宇宙小戦争'],
    correct: 'のび太の地球交響楽'
  },
];

const $doc = document;
const $quizContainer = $doc.getElementById('quiz-container');

const initQuiz = () => {
  quiz.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('mb-4');
    
    // 質問文を追加
    const questionTitle = document.createElement('p');
    questionTitle.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionTitle);
    
    // 選択肢を追加
    q.answers.forEach(answer => {
      const label = document.createElement('label');
      label.classList.add('d-block');
      
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `quiz-${index}`; // 質問ごとに一意のname属性
      input.value = answer;

      // 回答の保存イベントリスナーを設定
      input.addEventListener('change', () => {
        const questionId = input.name; // 例: quiz-1
        localStorage.setItem(`${pagePrefix}-${questionId}`, input.value); // 回答を保存
      });

      // 保存された回答をチェック
      const savedAnswer = localStorage.getItem(`${pagePrefix}-quiz-${index}`);
      if (savedAnswer === answer) {
        input.checked = true; // 選択状態を復元
      }
      
      label.appendChild(input);
      label.appendChild(document.createTextNode(answer));
      questionDiv.appendChild(label);
    });
    
    $quizContainer.appendChild(questionDiv);
  });
};

// 初期化
document.addEventListener('DOMContentLoaded', initQuiz);