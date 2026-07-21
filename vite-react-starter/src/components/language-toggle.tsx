import { Languages } from 'lucide-react'
import { Button } from '/@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '/@/components/ui/dropdown-menu'
import { useLocaleStore } from '/@/store/useLocaleStore'

export function LanguageToggle() {
  const { locale, setLocale } = useLocaleStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-xs cursor-pointer">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLocale('zh')}
          className={`cursor-pointer ${locale === 'zh' ? 'bg-muted font-medium' : ''}`}
        >
          简体中文
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLocale('en')}
          className={`cursor-pointer ${locale === 'en' ? 'bg-muted font-medium' : ''}`}
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
