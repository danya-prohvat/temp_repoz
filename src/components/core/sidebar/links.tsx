import { Settings } from 'components/pages/settings';
import { locations } from 'routing/locations';

export const links = [
  { iconType: 'home', text: 'Main', link: locations.home },
  { iconType: 'compass', text: 'Explore', link: locations.explore },
  { iconType: 'user', text: 'Subscribers', link: locations.subscribers },
  { iconType: 'user', text: 'Subscriptions', link: locations.subscriptions },
  { iconType: 'message', text: 'Messages', link: locations.messages },
  { iconType: 'saved', text: 'Saved', link: locations.saved },
  { iconType: 'settings', text: 'Settings', content: <Settings />, link: locations.settings },
];
