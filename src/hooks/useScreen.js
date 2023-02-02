import React, { useState, useEffect } from 'react'

function useScreen () {
    const width = document.documentElement.clientWidth
    const desktop = 1100
    const isMobile = width < desktop
    const isDesktop = width > desktop
    
    return {
        isMobile, isDesktop
    }
}

export default useScreen