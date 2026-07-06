import { useEffect, useRef, useState } from 'react';

const categories = [
  { id: 'graphic', label: '平面设计作品', enLabel: 'Graphic Design' },
  { id: 'case', label: '设计案例分析', enLabel: 'Design Cases' },
  { id: 'motion', label: '视频/动态作品', enLabel: 'Motion & Video' },
];

const works = [
  { id: 1, category: 'graphic', title: '品牌设计', desc: '现代简约风格品牌 Logo & VI 设计' },
  { id: 2, category: 'graphic', title: '海报设计', desc: '创意活动宣传海报系列' },
  { id: 3, category: 'graphic', title: '书籍装帧', desc: '艺术类书籍封面设计' },
  { id: 4, category: 'case', title: '餐饮品牌案例', desc: '从调研到视觉落地的完整案例' },
  { id: 5, category: 'case', title: '服装品牌案例', desc: '品牌重塑项目总结' },
  { id: 6, category: 'case', title: '文创产品案例', desc: '包装设计与视觉策划' },
  { id: 7, category: 'motion', title: '品牌宣传视频', desc: '3D 动画与视频剪辑' },
  { id: 8, category: 'motion', title: '动画演示', desc: '交互动画设计展示' },
  { id: 9, category: 'motion', title: '视觉效果', desc: 'VFX 特效作品' },
];

export default function Works() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('graphic');
  const cardsRef = useRef([]);

  const filteredWorks = works.filter(work => work.category === activeCategory);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s both`;
      }
    });
  }, [activeCategory]);

  return (
    <section id="works" ref={containerRef} className="relative w-full py-20 md:py-32 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-0.5 flex-1 bg-gradient-to-r from-accent-green to-accent-pink"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            作品展示
            <span className="text-2xl md:text-3xl text-accent-green ml-4">Works</span>
          </h2>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-accent-pink to-accent-green"></div>
        </div>

        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-6 py-3 font-semibold transition-all duration-300 ${
                activeCategory === cat.id ? 'text-white' : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <span>
                {cat.label}
                <span className={`text-xs ml-2 ${
                  activeCategory === cat.id ? 'text-accent-yellow' : 'text-gray-500'
                }`}>
                  {cat.enLabel}
                </span>
              </span>
              {activeCategory === cat.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-yellow via-accent-pink to-accent-green"></div>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work, index) => (
            <div
              key={work.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative overflow-hidden bg-dark-light border border-gray-700 hover:border-accent-pink transition-all duration-300 cursor-pointer"
            >
              <div className="w-full h-48 bg-gradient-to-br from-accent-yellow/10 to-accent-pink/10 flex items-center justify-center group-hover:from-accent-yellow/20 group-hover:to-accent-pink/20 transition-all duration-300">
                <img
                  src={`https://via.placeholder.com/400x300/1a1f3a/FFD700?text=${work.title}`}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-yellow transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{work.desc}</p>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-accent-pink text-xs">查看项目 →</span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-pink transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
