import {
  Dumbbell, Users, Flame, Target, Repeat, TrendingUp, Medal, UserCheck, Activity, Zap,
  LayoutGrid, ClipboardList, GraduationCap, HeartHandshake, Sparkles, Instagram, Facebook, Youtube,
} from 'lucide-react';

const map = {
  Dumbbell, Users, Flame, Target, Repeat, TrendingUp, Medal, UserCheck, Activity, Zap,
  LayoutGrid, ClipboardList, GraduationCap, HeartHandshake, Sparkles, Instagram, Facebook, Youtube,
};

export default function Icon({ name, size = 22, ...rest }) {
  const C = map[name] || Dumbbell;
  return <C size={size} aria-hidden="true" {...rest} />;
}
