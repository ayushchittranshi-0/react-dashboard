import Sidebar from './Sidebar'
import ContentSection from './ContentSection'

const PageLayout = ({children}) => {
  return (
        <>
            <Sidebar/>
            <ContentSection>
                {children}
            </ContentSection>
        </>
  )
}

export default PageLayout
