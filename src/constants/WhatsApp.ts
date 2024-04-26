import { Icons } from "../components/Icons";

export const TheadCTAOptionsList = [
  { name: 'Audio', icon: 'call', iconType: Icons.MaterialIcons },
  { name: 'Video', icon: 'videocam', iconType: Icons.MaterialIcons },
  { name: 'Add', icon: 'person-add', iconType: Icons.MaterialIcons },
  { name: 'Search', icon: 'search', iconType: Icons.Ionicons },
]

export const TheadSettingsOptionsList = [
  {
    name: 'Mute Notification', icon: 'bell', iconType: Icons.MaterialCommunityIcons,
    switch: true
  },
  { name: 'Custom notification', icon: 'music-note', iconType: Icons.MaterialIcons },
  {
    name: 'Media visibility', icon: 'insert-photo', iconType: Icons.MaterialIcons,
    desc: 'Off'
  },
  { name: 'Kept messages', icon: 'bookmark', iconType: Icons.MaterialIcons },
]
export const TheadSettingsOptionsList2 = [
  {
    name: 'Mute Notification', icon: 'lock', iconType: Icons.MaterialIcons,
    desc: 'Messages  calls are end-to-end encrypted. Tap to learn more.'
  },
  {
    name: 'Disappearing messages', icon: 'progress-clock', iconType: Icons.MaterialCommunityIcons,
    desc: '90 days'
  },
  {
    name: 'Chat lock', icon: 'sort-variant-lock', iconType: Icons.MaterialCommunityIcons,
    desc: 'Lock and hide this chat on this device'
  },
  { name: 'Group permission', icon: 'settings', iconType: Icons.MaterialIcons },
]