import { useEffect, useRef } from "react"
import { useAppContext } from "../../context/appContext"
import { StatsContainer, Loading, ChartsContainer } from "../../components"

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext()
  const hasFetchedStats = useRef(false)

  useEffect(() => {
    if (!hasFetchedStats.current) {
      showStats()
      hasFetchedStats.current = true
    }
  }, [showStats])

  if (isLoading) {
    return <Loading center />
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}
export default Stats
