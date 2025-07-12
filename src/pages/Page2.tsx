import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Link } from 'react-router-dom'

const Page2 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <ThemeToggle />
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Second Page
        </h1>
        <p className="text-xl text-muted-foreground">
          This is the second page of our application. You can add more content here.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg" className="px-8">
            <Link to="/">Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Page2 