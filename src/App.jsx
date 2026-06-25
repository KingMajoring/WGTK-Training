import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RoleSelect from './pages/RoleSelect'
import TrainerBriefing from './pages/TrainerBriefing'
import TrainerDashboard from './pages/TrainerDashboard'
import TrainerLesson from './pages/TrainerLesson'
import TraineeDashboard from './pages/TraineeDashboard'
import TraineeLesson from './pages/TraineeLesson'

export default function App() {
  return (
    <BrowserRouter basename="/WGTK-Training">
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/trainer/briefing" element={<TrainerBriefing />} />
        <Route path="/trainer" element={<TrainerDashboard />} />
        <Route path="/trainer/lesson/:id" element={<TrainerLesson />} />
        <Route path="/trainee" element={<TraineeDashboard />} />
        <Route path="/trainee/lesson/:id" element={<TraineeLesson />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
