'use client'

import { invoke } from '@tauri-apps/api/core'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from './ui/input'

export function Greet() {
  const [name, setName] = useState('')
  const [greetMsg, setGreetMsg] = useState('')

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke('greet', { name }))
  }

  return (
    <Card className="w-full max-w-md border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
      <CardHeader>
        <CardTitle>Tauri Interaction</CardTitle>
        <CardDescription>Call a Rust command from the frontend.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-2">
          <Input id="greet-input" placeholder="Enter a name..." onChange={e => setName(e.currentTarget.value)} />
          <Button onClick={() => greet()} className="w-full">
            Greet
          </Button>
        </div>
        {greetMsg && (
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50 animate-in fade-in slide-in-from-bottom-1 duration-300">
            {greetMsg}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
