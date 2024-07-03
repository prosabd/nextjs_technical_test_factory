// Code: Header component
import AuthButton from '@/components/AuthButton';

type HeaderProps = {
  pathname?: string;
  isConnected?: boolean;
};

export default function Header({ pathname, isConnected }: HeaderProps) {

  return (
    <div className="w-full">
        {pathname === '/protected' && (
          <div className="py-6 font-bold bg-purple-950 text-center">
            This is a <b>protected</b> page that you can only see as an authenticated user
          </div>
        )}
          
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <div >
            {isConnected ? (
                // Render differents routes buttons if user is Connected 
                <>
                  <a href="/notes">
                    <button className="bg-blue-700 rounded-md px-4 py-2 text-foreground mr-4">Notes</button>
                  </a>
                  <a href="/api/posts">
                    <button className="bg-red-700 rounded-md px-4 py-2 text-foreground mr-4">Posts</button>
                  </a>
                  <a href="/api/postVerification">
                    <button className="bg-green-700 rounded-md px-4 py-2 text-foreground mr-4">PostVerif</button>
                  </a>
                </>
              ) : (
                // Render "Welcome" message if user not connected
                <span><b>Welcome to my technical test 😉</b></span>
              )}
            </div>
            <AuthButton /> 
          </div>
        </nav>
    </div>
  );
}
