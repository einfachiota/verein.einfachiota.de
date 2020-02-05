import React, { useState, Fragment } from 'react'
import '../styles/galaxy.scss'
import header from '../assets/header.svg'
import Lines from '../assets/Lines'
import Stars from '../assets/Stars'
import Departments from './Departments'
import Sidebar from './Sidebar'

const Galaxy = () => {
  const departments = [
    {
      title: 'Vorsitz',
      description:
        'Die Rolle des Vorsitzenden besteht primär aus Kommunikation, Moderation und Organisation. Die Hauptverantwortung des Vorsitzenden ist es den gesamten Verein zu überblicken, zu leiten und intern wie extern zu vertreten. Er vertritt die Interessen des gesamten Vereins und repräsentiert den Verein juristisch gegenüber Dritten. Kurzum, der Vorsitz trägt die größte Verantwortung.',
      leader: 1,
      member: 4,
      position: 0,
      color: 'rgba(0, 183, 197, 1)'
    },
    {
      title: 'Community',
      description:
        'Das Referat Community hat zwei zentrale Aufgaben: Die Steigerung der Reichweite des Vereins im Hinblick auf das Wachstum unserer Mitglieder, Community und Followern. Konkrete Aufgaben sind hier Social Media, Discord und das Community Forum moderieren, sowie Kontakte herstellen und Kommunikation.',
      leader: 1,
      member: 4,
      position: 1,
      color: 'rgba(186, 71, 19, 1)'
    },
    {
      title: 'Events',
      description:
        'Das Referat Events kümmert sich um die Planung und Ausführung von Workshops und Events. Wir treten dabei meistens unterstützenden zur Seite und helfen mit Workshops, Keynotes oder Infoständen, bei der Organisation, oder einfach als Netzwerk.',
      leader: 1,
      member: 2,
      position: 2,
      color: 'rgba(224, 125, 26, 1)'
    },
    {
      title: 'Entwicklung',
      description:
        'Das Referat Entwicklung hat drei Hauptaufgaben. Erstens die Entwicklung und Wartung von Anwendungen wie zum Beispiel der Website oder nützlichen Tools. Zweitens das Sicherstellen stabiler IT Strukturen für den Verein. Und drittens die Aus- und Weiterbildung der Community und darüber hinaus.',
      leader: 1,
      member: 3,
      position: 3,
      color: 'rgba(255, 234, 0, 101)'
    },
    {
      title: 'Design',
      description:
        'Das Design Referat unterstützt den Verein auf zwei Ebenen. Zum einen beim Design von Prozessen, Strukturen und dem Corporate Identity des Vereins. Zum anderen bei der gestalterischen Umsetzung von Berührungspunkten, wie zum Beispiel die Website, Visitenkarten oder das Magazin. Es gibt folgende Bereiche: Grafik, UI/UX, Film und Audio.',
      leader: 1,
      member: 1,
      position: 4,
      color: 'rgba(49, 224, 26, 1)'
    },
    {
      title: 'Redaktion',
      description:
        'Die Redaktion kümmert sich um journalistische Arbeit wie zum Beispiel Interviews durchzuführen oder Recherche zu betreiben. Außerdem verfasst, korrigiert und übersetzt die Redaktion Artikel.',
      leader: 1,
      member: 4,
      position: 5,
      color: 'rgba(143, 3, 195, 1)'
    },
    {
      title: 'Finanzen',
      description:
        'Gemeinsam mit dem Vorsitz hat das Amt der Finanzen die Verantwortung stabile Organisationsstrukturen zu schaffen. Aufgabe ist, den Verein juristisch, finanziell und organisatorisch auf ein nachhaltiges Fundament zu stellen. Konkrete Aufgaben sind die Verwaltung der Kassen und Konten, Rechnungswesen, Finanzen und Controlling.',
      leader: 2,
      member: 2,
      position: 6,
      color: 'rgba(0, 118, 255, 1)'
    }
  ]
  const [sideBarActive, setSidebarActive] = useState(true)
  const [departmentActive, setDepartmentActive] = useState(0)
  const selectDepartment = () => {
    // setSidebarActive(!sideBarActive)
    if (departmentActive === 6) {
      setDepartmentActive(0)
    } else {
      setDepartmentActive(departmentActive + 1)
    }
    console.log('sidebarActive: ', sideBarActive)
  }

  return (
    <Fragment>
      <div className='header'>
        <img src={header} alt='' />
      </div>
      <div className='body'>
        <div className='galaxy'>
          <div className='circle circle--core'></div>
          <div className='circle circle--inner'></div>
          <div className='circle circle--outer'></div>
          <div className='circle circle--space'></div>
          <Lines />
          <Stars />
          <Departments
            departments={departments}
            departmentActive={departmentActive}
          />
        </div>
        <Sidebar
          departments={departments}
          departmentActive={departmentActive}
          sideBarActive={sideBarActive}
        />
      </div>

      <div className='actions'>
        <button
          className='btn'
          onClick={() => {
            selectDepartment()
          }}
        >
          Next Department
        </button>
      </div>
    </Fragment>
  )
}

export default Galaxy
