export function setLayoutScroll ( layout: HTMLDivElement, offset: number, unit: string, isVertical: boolean ): void {
    const value: string = isVertical ? `0px, ${offset}${unit}, 0px` : `${offset}${unit}, 0px, 0px`;
    const translate3d = `translate3d(${value})`;
    const style = layout.style;
    setTransfrom( style, translate3d );
}

export function getTabItemWidht ( maxTabLength: number ): any {
    return ( 100 / maxTabLength ).toFixed( 4 );
}

export function getTranslate3dStyle ( value: string, direction: any ): any {
    const offset = direction === 'vertical' ? `0px, ${value}, 0px` : `${value}, 0px, 0px`;
    const translate3d = `translate3d(${offset})`;
    return {
        transform: translate3d,
        WebkitTransform: translate3d,
        MozTransform: translate3d
    };
}

function setTransfrom ( style: any, value: string ): void {
    style.transform = value;
    style.WebkitTransform = value;
    style.MozTransform = value;
}