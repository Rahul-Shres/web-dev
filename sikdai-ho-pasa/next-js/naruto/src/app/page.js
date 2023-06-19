
import NinjaForm from './components/NinjaForm';
import NinjaList from './components/NinjaList';
import { NinjaProvider } from './context/NinjaContext';

export default function Home() {
  return (
    <NinjaProvider>
      <div>
        <h1>Ninja Team Management</h1>
        <NinjaForm />
        <NinjaList />
      </div>
    </NinjaProvider>
  )
}
