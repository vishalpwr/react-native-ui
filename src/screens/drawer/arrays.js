import { Icons } from "../../components/Icons";
import DrawerScreen from "../DrawerScreen";
import { colors } from "./constant";

export const ScreensArray = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: DrawerScreen, notification: 0, },
  { route: 'Inbox', label: 'My Inbox', type: Icons.Feather, icon: 'inbox', component: DrawerScreen, notification: 9, },
  { route: 'Calendar', label: 'My Calendar', type: Icons.Feather, icon: 'calendar', component: DrawerScreen, notification: 4, },
  { route: 'Documents', label: 'My Documents', type: Icons.Feather, icon: 'layers', component: DrawerScreen, notification: 0, },
  { route: 'Activity', label: 'My Activity', type: Icons.Feather, icon: 'pie-chart', component: DrawerScreen, notification: 2, },
  { route: 'Settings', label: 'Settings', type: Icons.Feather, icon: 'settings', component: DrawerScreen, notification: 0, },
];

export const ProjectsArray = [
  { title: "Personal", icon: "profile", color: colors.icon1, iconType: Icons.AntDesign },
  { title: "travel", icon: "profile", color: colors.icon2, iconType: Icons.AntDesign },
  { title: "Business", icon: "profile", color: colors.icon3, iconType: Icons.AntDesign },
  { title: "Add", icon: "plus", color: colors.icon4, iconType: Icons.AntDesign },
]

export const ProfileMenu = [
  { label: 'History', icon: 'history', iconType: Icons.MaterialIcons },
  { label: 'Rate', icon: 'star', iconType: Icons.MaterialIcons },
  { label: 'Share', icon: 'share', iconType: Icons.MaterialIcons },
  { label: 'Logout', icon: 'logout', iconType: Icons.MaterialIcons },
]