import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Link } from 'react-router-dom'
import { APP_CONFIG } from '@/constants'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <ThemeToggle />
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          {APP_CONFIG.name}
        </h1>
        <p className="text-xl text-muted-foreground">
          {APP_CONFIG.description}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg" className="px-8">
            <Link to="/page2">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            View Documentation
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          Version {APP_CONFIG.version}
        </div>
      </div>
    </div>
  )
}

export default Home