import { useEffect, useCallback } from "react"
import { useAppContext } from "../../context/appContext"
import { StatsContainer, Loading, ChartsContainer } from "../../components"

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext()

  const showStatsCallback = useCallback(() => {
    showStats()
  }, [])

  useEffect(() => {
    showStatsCallback()
  }, [showStatsCallback])

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
