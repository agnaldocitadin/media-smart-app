
export const HORIZONTAL = 0
export const VERTICAL = 1

export const Geometry = {

    distancePoints: (pointAX, pointBX, pointAY, pointBY) => {
        return Math.sqrt(Math.pow(pointAX - pointBX, 2) + Math.pow(pointAY - pointBY, 2))
    },

    getCenterPoint: (rectangle) => {
        return { 
            x: rectangle.left + (rectangle.width / 2), 
            y: rectangle.top + (rectangle.height / 2)
        }
    },

    isAlignedHorizontal: (rectangleA, rectangleB, correction = 0) => {
        return (rectangleA.top >= rectangleB.top - correction && rectangleA.bottom <= rectangleB.bottom + correction)
    },

    isAlignedVertical: (rectangleA, rectangleB, correction = 0) => {
        return (rectangleA.left >= rectangleB.left - correction && rectangleA.right <= rectangleB.right + correction)
    },

    isAligned: (rectangleA, rectangleB, correction = 0) => {
        return Geometry.isAlignedHorizontal(rectangleA, rectangleB, correction) || Geometry.isAlignedVertical(rectangleA, rectangleB, correction)
    },

    isAlignedByAxis: (rectangleA, rectangleB, axis, correction = 0) => {
        return axis == HORIZONTAL ? Geometry.isAlignedHorizontal(rectangleA, rectangleB, correction) : Geometry.isAlignedVertical(rectangleA, rectangleB, correction)
    },

    isNearest: (rectangleA, rectangleB, rectangleReferencePoint) => {
        const centerPointA = Geometry.getCenterPoint(rectangleA)
        const centerPointB =  Geometry.getCenterPoint(rectangleB)
        const referencePoint = Geometry.getCenterPoint(rectangleReferencePoint)
        const distanceRefElement = Geometry.distancePoints(referencePoint.x, centerPointA.x, referencePoint.y, centerPointA.y)
        const distanceElement = Geometry.distancePoints(referencePoint.x, centerPointB.x, referencePoint.y, centerPointB.y)
        return distanceRefElement > distanceElement
    },

    isRectAInsideRectB: (rectangleA, rectangleB) => {
        return rectangleA.top >= rectangleB.top && rectangleA.right <= rectangleB.right && rectangleA.bottom <= rectangleB.bottom && rectangleA.left >= rectangleB.left
    },

    getCoveredHtmlByElement: (element) => {
        let lastDisplayState = element.style.display
        const point = Geometry.getCenterPoint(element.getBoundingClientRect())
        element.style.display = "none"
        const selectedElement = document.elementFromPoint(point.x, point.y)
        element.style.display = lastDisplayState
        return selectedElement
    },

    isOutOfBox: (element, parent) => {
        const elementRect = element.getBoundingClientRect()
        const parentRect = parent.getBoundingClientRect()
        return (elementRect.left < parentRect.left) || (elementRect.right > parentRect.right) || (elementRect.top < parentRect.top) || (elementRect.bottom > parentRect.bottom)
    }

}