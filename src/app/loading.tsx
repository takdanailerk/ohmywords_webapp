import { Spinner } from '@/components/ui/spinner'
import React from 'react'

const VocabCategoriesPageLoading = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <Spinner className='text-blue-900' />
        </div>
    )
}

export default VocabCategoriesPageLoading