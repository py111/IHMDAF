import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Note Payeur',
    route: '/notePayeur',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Répartition des notes',
        to: '/notePayeur/repartionNotes',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Traitement des notes',
        to: '/notePayeur/traitementNotes',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Congifuration',
        to: '/notePayeur/config',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Mode de calcul',
        to: '/notePayeur/modeCalcul',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Répartition des clients par JJ',
        to: '/notePayeur/repartionclients',
      },
    ]
  }
]

export default _nav
