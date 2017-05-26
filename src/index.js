 export default function BloggListGrid(elementName, callback) {
    const BlogList = document.getElementById(elementName)
    if (!BlogList) { return }

    const BlogListDeepCopy = BlogList.cloneNode(true)
    const BlogListCopy = BlogList.cloneNode(false)

    const columnOne = document.createElement('div')
    const columnTwo = document.createElement('div')

    BlogListCopy.appendChild(columnOne)
    BlogListCopy.appendChild(columnTwo)

    columnOne.className = 'u-flexColumn js-BlogList-column is-left'
    columnTwo.className = 'u-flexColumn js-BlogList-column is-right'

    let firstRuntime = true
    let gridCreated = false
    let gridActive = false

    function deactivateGrid() {
        gridActive = false
        BlogListCopy.parentNode.replaceChild(BlogList, BlogListCopy)
    }
    function activateGrid() {
        gridActive = true
        BlogList.parentNode.replaceChild(BlogListCopy, BlogList)
    }
    function createGrid() {
        const children = [...BlogListDeepCopy.children]

        for (const child of children) {
            if (firstRuntime) {
                columnOne.appendChild(child)
                firstRuntime = false
            } else {
                columnOne.offsetHeight > columnTwo.offsetHeight ? columnTwo.appendChild(child) : columnOne.appendChild(child)
            }
        }
        gridCreated = true
        BlogListCopy.classList.add('u-flexRow')
        callback()
    }

    if (window.innerWidth >= 800) {
        activateGrid()
        createGrid()
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 1439 && window.innerWidth >= 801 && !gridActive) {
            activateGrid()
            if (!gridCreated) {
                createGrid()
            } else {
                callback()
            }
        } else if (window.innerWidth <= 800 && gridActive) {
            deactivateGrid()
            callback()
        }
    })
}
