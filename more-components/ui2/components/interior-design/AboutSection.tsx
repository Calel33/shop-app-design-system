import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl sm:text-6xl font-light tracking-tighter mb-6">Crafting Dreams into <span className="font-semibold text-indigo-600">Living Reality</span></h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">We transform spaces through exceptional interior design.</p>
          <a href="#portfolio" className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg">Explore Our Work</a>
        </div>
        <div>
          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/211d2508-6de8-4442-bc3e-3e8bea65298f_800w.jpg" alt="Interior design team" className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl" />
        </div>
      </div>
    </section>
  );
};
