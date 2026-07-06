export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-dark-bg border-t border-gray-700 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <span className="text-white">Li</span>
              <span className="text-accent-yellow">D</span>
            </div>
            <p className="text-xs text-gray-400">Visual Communication Designer</p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-4">
              快速导航 <span className="text-xs text-gray-400 ml-2">Navigation</span>
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-accent-yellow transition-colors">关于 About</button></li>
              <li><button onClick={() => scrollToSection('works')} className="hover:text-accent-yellow transition-colors">作品 Works</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-accent-yellow transition-colors">联系 Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-4">
              社交媒体 <span className="text-xs text-gray-400 ml-2">Social</span>
            </h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white flex items-center justify-center transition-all text-xs">IG</a>
              <a href="#" className="w-10 h-10 rounded-full border border-accent-yellow text-accent-yellow hover:bg-accent-yellow hover:text-dark-bg flex items-center justify-center transition-all text-xs">WX</a>
              <a href="#" className="w-10 h-10 rounded-full border border-accent-green text-accent-green hover:bg-accent-green hover:text-dark-bg flex items-center justify-center transition-all text-xs">TW</a>
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-gradient-to-r from-accent-yellow via-accent-pink to-accent-green mb-8"></div>

        <div className="text-center text-xs text-gray-500">
          <p>© {currentYear} Li Dong. All rights reserved. | Designed & Built with ♥</p>
        </div>
      </div>
    </footer>
  );
}
