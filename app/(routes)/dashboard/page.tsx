"use client"
import { Button } from '@/components/ui/button'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Button>
        <LogoutLink>Logout</LogoutLink>
      </Button>
    </div>
  )
}

export default Dashboard