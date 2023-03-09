import { Plus, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';

import logoImage from '../assets/logo.svg'
import { NewHabitForm } from './NewHabitForm';

export function Header() {
  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={logoImage} alt="Logo" />

      <Dialog.Root>
        <Dialog.Trigger
          type='button'
          className='border border-violet-500 font-semibold text-white rounded-lg px-6 py-4 flex items-center hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background'
        >
          <Plus size={20} className='text-violet-500' />
          Novo hábito
        </Dialog.Trigger>

        
      </Dialog.Root>
    </div>
  )
}