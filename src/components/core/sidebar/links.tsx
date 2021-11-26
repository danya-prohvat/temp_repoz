import { Settings } from 'components/pages/settings';
import { Subscribers } from 'components/pages/subscribers';
import { Subscriptions } from 'components/pages/subscriptions';
import { locations } from 'routing/locations';

export const links = [
  { iconType: 'home', text: 'Main', link: locations.home },
  { iconType: 'compass', text: 'Explore', link: locations.explore },
  { iconType: 'user', text: 'Subscribers', content: <Subscribers />, link: locations.subscribers },
  { iconType: 'user', text: 'Subscriptions', content: <Subscriptions />, link: locations.subscriptions },
  { iconType: 'message', text: 'Messages', link: locations.messages },
  { iconType: 'saved', text: 'Saved', link: locations.saved },
  { iconType: 'settings', text: 'Settings', content: <Settings />, link: locations.settings },
];
