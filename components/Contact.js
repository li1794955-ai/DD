import { useRef, useState } from 'react';

export default function Contact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" ref={containerRef} className="relative w-full py-20 md:py-32 px-4 bg-gradient-to-b from-dark-light to-dark-bg">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-0.5 flex-1 bg-gradient-to-r from-accent-cyan to-accent-yellow"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            联系我
            <span className="text-2xl md:text-3xl text-accent-cyan ml-4">Contact</span>
          </h2>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-accent-yellow to-accent-cyan"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-8">
            <div className="border-l-4 border-accent-yellow pl-6">
              <h3 className="text-lg font-bold text-white mb-2">快速联系</h3>
              <p className="text-base text-gray-300 mt-4">有任何设计需求或合作机会？欢迎联系我！</p>
            </div>
            <div className="border-l-4 border-accent-pink pl-6">
              <h3 className="text-lg font-bold text-white mb-3">联系方式</h3>
              <div className="space-y-2 text-base text-gray-300">
                <p>
                  <span className="text-accent-pink font-semibold">📞</span>
                  <a href="tel:15523957239" className="ml-2 hover:text-accent-yellow transition-colors">15523957239</a>
                </p>
                <p>
                  <span className="text-accent-pink font-semibold">💬</span>
                  <span className="ml-2">QQ: 1303212579</span>
                </p>
                <p>
                  <span className="text-accent-pink font-semibold">📧</span>
                  <a href="mailto:1303212579@qq.com" className="ml-2 hover:text-accent-yellow transition-colors">1303212579@qq.com</a>
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">姓名 <span className="text-xs text-gray-400">Name</span></label>
              <input type="text" name="name" value={formData.name} onChange={handleChange}
                className="w-full bg-dark-bg border border-gray-600 text-white px-4 py-2 focus:border-accent-yellow focus:outline-none transition-colors"
                placeholder="请输入您的名字" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">邮箱 <span className="text-xs text-gray-400">Email</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full bg-dark-bg border border-gray-600 text-white px-4 py-2 focus:border-accent-pink focus:outline-none transition-colors"
                placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">留言 <span className="text-xs text-gray-400">Message</span></label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
                className="w-full bg-dark-bg border border-gray-600 text-white px-4 py-2 focus:border-accent-green focus:outline-none transition-colors resize-none"
                placeholder="请输入您的留言..." />
            </div>
            <button type="submit"
              className="w-full group relative px-6 py-3 bg-transparent border-2 border-accent-pink text-accent-pink hover:text-white font-semibold transition-colors duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-accent-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
              <span>发送消息 <span className="text-xs ml-2">Send Message</span></span>
            </button>
            {submitted && <p className="text-center text-accent-green text-sm">✓ 感谢您的留言！我会尽快回复。</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
