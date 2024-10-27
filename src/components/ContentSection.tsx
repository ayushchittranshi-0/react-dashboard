
const ContentSection = ({children}) => {
    return (
            <div className="flex flex-col flex-1 ml-64 bg-secondaryBgColor overflow-hidden">
            <div className="flex-1 overflow-auto">
                {children}
            </div>
            </div>

    )
}

export default ContentSection

