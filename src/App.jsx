import React, { useState } from 'react';

// 上班牛马相关的测试题目
const questions = [
  {
    id: 1,
    text: '当你收到工作群里的消息时，你的第一反应是：',
    options: [
      { value: 'A', text: '紧张，担心又有新任务', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '淡定，先看看是什么事', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '烦躁，又要占用私人时间', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '兴奋，又有表现机会', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  },
  {
    id: 2,
    text: '周末突然接到加班通知，你会：',
    options: [
      { value: 'A', text: '立刻答应，不敢拒绝', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '无奈接受，心里抱怨', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '直接拒绝，管他呢', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '开心接受，主动加班', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  },
  {
    id: 3,
    text: '当工作任务超出你的能力范围时，你会：',
    options: [
      { value: 'A', text: '硬着头皮做，怕被说不行', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '寻求帮助，合理分工', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '拖延到最后，随便应付', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '挑战自我，努力学习', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  },
  {
    id: 4,
    text: '面对同事的请求，你会：',
    options: [
      { value: 'A', text: '不管自己多忙都答应', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '视情况而定，合理安排', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '找借口拒绝，不想多事', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '主动帮忙，建立关系', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  },
  {
    id: 5,
    text: '当领导批评你时，你会：',
    options: [
      { value: 'A', text: '低头认错，不管是不是自己的错', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '认真倾听，反思改进', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '心里不服，表面应付', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '虚心接受，积极调整', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  },
  {
    id: 6,
    text: '工作中遇到挫折，你会：',
    options: [
      { value: 'A', text: '自我怀疑，情绪低落', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '分析原因，寻找解决办法', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '抱怨命运，一蹶不振', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '视为挑战，越挫越勇', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  },
  {
    id: 7,
    text: '对于加班，你的态度是：',
    options: [
      { value: 'A', text: '习以为常，不敢有意见', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '偶尔可以，经常不行', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '坚决反对，到点就走', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '自愿加班，追求卓越', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  },
  {
    id: 8,
    text: '当工作和生活发生冲突时，你会：',
    options: [
      { value: 'A', text: '优先工作，牺牲生活', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '尽量平衡，合理安排', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '优先生活，工作靠边', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '将生活融入工作，享受其中', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  },
  {
    id: 9,
    text: '对于职场人际关系，你认为：',
    options: [
      { value: 'A', text: '尽量讨好所有人，避免冲突', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '保持专业，友好相处', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '无所谓，做好自己就行', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '积极建立人脉，拓展资源', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  },
  {
    id: 10,
    text: '你对未来的职业规划是：',
    options: [
      { value: 'A', text: '稳定就好，不敢有太多想法', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '稳步发展，逐步提升', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '走一步看一步，没什么规划', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '野心勃勃，追求更高职位', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  },
  {
    id: 11,
    text: '当同事请假让你帮忙代班时，你会：',
    options: [
      { value: 'A', text: '毫不犹豫答应，即使自己很忙', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '看自己的工作安排，合理答应', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '找借口拒绝，不想增加工作量', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '主动提出帮忙，展示自己的能力', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  },
  {
    id: 12,
    text: '对于公司的团建活动，你的态度是：',
    options: [
      { value: 'A', text: '积极参加，怕被孤立', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '适度参与，平衡工作和社交', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '能不去就不去，浪费时间', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '热情参与，主动组织活动', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  },
  {
    id: 13,
    text: '当工作中需要学习新技能时，你会：',
    options: [
      { value: 'A', text: '被动学习，按要求完成', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '主动学习，提升自己', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '敷衍了事，能不学就不学', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '深入学习，追求精通', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  },
  {
    id: 14,
    text: '面对工作中的竞争，你会：',
    options: [
      { value: 'A', text: '避免竞争，害怕冲突', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '公平竞争，尊重对手', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '无所谓竞争，做好自己', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '积极竞争，力争上游', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  },
  {
    id: 15,
    text: '当工作任务截止日期临近时，你会：',
    options: [
      { value: 'A', text: '焦虑不安，加班加点完成', score: { type1: 1, type2: 0, type3: 0, type4: 0 } },
      { value: 'B', text: '合理安排时间，按时完成', score: { type1: 0, type2: 1, type3: 0, type4: 0 } },
      { value: 'C', text: '拖延到最后，仓促完成', score: { type1: 0, type2: 0, type3: 1, type4: 0 } },
      { value: 'D', text: '提前完成，留出时间检查', score: { type1: 0, type2: 0, type3: 0, type4: 1 } }
    ]
  }
];

// 人格类型定义
const personalityTypes = [
  {
    id: 'type1',
    name: '温顺牛马',
    description: '你是职场中的温顺牛马，总是默默承受，不敢反抗。你害怕冲突，总是优先满足他人的需求，即使牺牲自己的利益。虽然你很可靠，但也容易被人忽视和利用。建议你学会说"不"，维护自己的权益。',
    matched: '你的性格就像一头温顺的牛，任劳任怨，默默奉献。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20cow%20wearing%20office%20clothes%20working%20hard%20meek%20expression&image_size=square'
  },
  {
    id: 'type2',
    name: '平衡打工人',
    description: '你是职场中的平衡打工人，能够合理安排工作和生活。你既认真负责，又懂得保护自己的权益。你善于沟通，能够与同事和领导保持良好的关系。你的工作状态稳定，是团队中的可靠成员。',
    matched: '你的性格就像一个平衡的秤，能够在工作和生活之间找到完美的平衡点。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20person%20balancing%20work%20and%20life%20office%20setting%20calm%20expression&image_size=square'
  },
  {
    id: 'type3',
    name: '叛逆打工人',
    description: '你是职场中的叛逆打工人，对不合理的要求敢于说"不"。你重视个人生活，不愿意被工作占据太多时间。你有自己的想法和原则，不会轻易妥协。虽然有时会显得特立独行，但你的独立精神值得赞赏。',
    matched: '你的性格就像一匹野马，自由奔放，不受束缚。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20person%20with%20rebellious%20attitude%20office%20setting%20cool%20expression&image_size=square'
  },
  {
    id: 'type4',
    name: '奋斗卷王',
    description: '你是职场中的奋斗卷王，对工作充满热情和野心。你愿意为了目标付出额外的努力，追求卓越。你善于抓住机会，积极提升自己。虽然你的工作能力很强，但也要注意平衡工作和生活，避免过度消耗。',
    matched: '你的性格就像一头狮子，充满斗志，勇往直前。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20lion%20wearing%20office%20clothes%20working%20hard%20determined%20expression&image_size=square'
  }
];

function App() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  // 处理选项选择
  const handleOptionSelect = (questionId, option) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  // 计算测试结果
  const calculateResult = () => {
    const scores = {
      type1: 0,
      type2: 0,
      type3: 0,
      type4: 0
    };

    // 计算各类型得分
    Object.values(answers).forEach(option => {
      Object.entries(option.score).forEach(([type, score]) => {
        scores[type] += score;
      });
    });

    // 找出得分最高的类型
    let maxScore = 0;
    let maxType = null;

    Object.entries(scores).forEach(([type, score]) => {
      if (score > maxScore) {
        maxScore = score;
        maxType = type;
      }
    });

    // 计算匹配度
    const totalQuestions = questions.length;
    const matchPercentage = Math.round((maxScore / totalQuestions) * 100);

    // 获取对应人格类型信息
    const personalityType = personalityTypes.find(type => type.id === maxType);

    setResult({
      type: personalityType,
      matchPercentage,
      scores
    });

    setShowResult(true);
  };

  // 重置测试
  const resetTest = () => {
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  // 检查是否所有问题都已回答
  const allQuestionsAnswered = Object.keys(answers).length === questions.length;

  if (showResult && result) {
    return (
      <div className="App">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <img 
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20office%20icon%20minimalist&image_size=square" 
            alt="Office Icon" 
            style={{ width: '50px', height: '50px', marginRight: '15px' }}
          />
          <h1>上班族sbti测试结果</h1>
        </div>
        <div className="result">
          <h2>怎么样，被我拿捏了吧？</h2>
          <div className="result-content">
            <h3>你的主类型</h3>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0' }}>
              <img 
                src={result.type.image} 
                alt={result.type.name} 
                style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px' }}
              />
              <p className="result-score">{result.type.name}</p>
              <p className="result-score">匹配度 {result.matchPercentage}%</p>
              <p>{result.type.matched}</p>
            </div>
            
            <h3>该人格的简单解读</h3>
            <p className="result-description">{result.type.description}</p>
            
            <h3>各维度评分</h3>
            {personalityTypes.map(type => {
              const score = result.scores[type.id];
              const percentage = Math.round((score / questions.length) * 100);
              return (
                <div key={type.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                    <span>{type.name}</span>
                    <span>{percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
            
            <h3>友情提示</h3>
            <p>本测试仅供娱乐，别拿它当诊断、面试、相亲、分手、招魂、算命或人生判决书。</p>
          </div>
          <button className="button" onClick={resetTest}>重新测试</button>
        </div>
        <div className="footer">
          <p>作者的话：本测试主题为"上班牛马相关的SBTI"，仅供娱乐，如有冒犯请见谅！</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <img 
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20office%20icon%20minimalist&image_size=square" 
          alt="Office Icon" 
          style={{ width: '50px', height: '50px', marginRight: '15px' }}
        />
        <h1>上班族sbti</h1>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
        ></div>
      </div>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        {Object.keys(answers).length} / {questions.length}
      </p>
      <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
        全选完才会放行。世界已经够乱了，起码把题做完整。
      </p>
      
      {questions.map(question => (
        <div key={question.id} className="question">
          <div className="question-text">{question.id}. {question.text}</div>
          <div className="options">
            {question.options.map(option => (
              <div
                key={option.value}
                className={`option ${answers[question.id]?.value === option.value ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(question.id, option)}
              >
                {option.text}
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button 
          className="button" 
          onClick={calculateResult}
          disabled={!allQuestionsAnswered}
        >
          查看结果
        </button>
      </div>
      
      <div className="footer">
        <p>友情提示：本测试仅供娱乐，别太当真哦！</p>
      </div>
    </div>
  );
}

export default App;