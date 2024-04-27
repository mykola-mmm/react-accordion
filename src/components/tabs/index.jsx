import Tabs from "./tabs"

function RandomComponent() {
    return <div>Some random text</div>
}

export default function TabsParent() {

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>Tab 1 Content</div>
        },
        {
            label: 'Tab 2',
            content: <div>Tab 2 Content</div>
        },
        {
            label: 'Tab 3',
            content: <RandomComponent/>
        }
    ]

    function handleChange(currentTabIndex) {
        console.log('currentTabIndex', currentTabIndex)
    }

    return (
        <>
            <Tabs tabsContent={tabs} onChange={handleChange}/>
        </>
    )
}