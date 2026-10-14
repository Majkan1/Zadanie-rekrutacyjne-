import './Features.scss';
import Tab1 from '../../images/illustration-features-tab-1.svg';
import Tab2 from '../../images/illustration-features-tab-2.svg';
import Tab3 from '../../images/illustration-features-tab-3.svg';
import { useState } from 'react';

export const features = [
  {
    tab: 'Simple Bookmarking',
    title: 'Bookmark in one click',
    text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    Image: Tab1,
  },
  {
    tab: 'Speedy Searching',
    title: 'Intelligent search',
    text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    Image: Tab2,
  },
  {
    tab: 'Easy Sharing',
    title: 'Share your bookmarks',
    text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    Image: Tab3,
  },
];
export default function Features() {
  const [stan, setStan] = useState(features[0]);
  const ActiveImage = stan.Image;
  return (
    <>
      <h1 className="Features__head-title">Features</h1>
      <p className="Features__p">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <ul></ul>
      <div className="Features--choises">
        <button
          className="Features--bookmarking"
          onClick={() => {
            setStan(features[0]);
          }}
        >
          {stan.tab}
        </button>
        <button
          className="Features--searching"
          onClick={() => {
            setStan(features[1]);
          }}
        >
          {stan.tab}
        </button>
        <button
          className="Features--sharing"
          onClick={() => {
            setStan(features[2]);
          }}
        >
          {stan.tab}
        </button>
      </div>
      <div>
        <div className="Features--choices">
          <ActiveImage className="Features__Active-Image" />
          <div className="under-the-Image"></div>
          <h3 className="tab--h1">{stan.title}</h3>
          <p className="Features--text">{stan.text}</p>
        </div>
      </div>
    </>
  );
}
