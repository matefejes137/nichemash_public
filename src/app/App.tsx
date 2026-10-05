import { Hero } from './components/Hero';
import { About } from './components/About';
import { Mission } from './components/Mission';
import { WhatWeBuild } from './components/WhatWeBuild';
import { Platforms } from './components/Platforms';
import { HowItWorks } from './components/HowItWorks';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Mission />
      <WhatWeBuild />
      <Platforms />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
}
