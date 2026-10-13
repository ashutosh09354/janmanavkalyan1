import { HeartHandshake, Heart, Users, CalendarDays, BookOpen, Activity, Soup, Droplet, Leaf } from 'lucide-react'

const MAP = { HeartHandshake, Heart, Users, CalendarDays, BookOpen, Activity, Soup, Droplet, Leaf }

export default function Icon({ name, ...props }) {
  const C = MAP[name] || Heart
  return <C aria-hidden="true" {...props} />
}
