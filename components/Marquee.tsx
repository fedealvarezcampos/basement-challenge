function Marquee() {
    return (
        <div className="relative flex select-none overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap border-y-2 py-3 text-[1rem] md:text-[1.5rem]">
                <span>&nbsp;{`- A man can't have enough basement swag`}</span>
                <span>&nbsp;{`- A man can't have enough basement swag`}</span>
                <span>&nbsp;{`- A man can't have enough basement swag`}</span>
                <span>&nbsp;{`- A man can't have enough basement swag`}</span>
                <span>&nbsp;{`- A man can't have enough basement swag`}</span>
            </div>
            <div className="animate-marquee2 absolute top-0 whitespace-nowrap border-y-2 py-3 text-[1rem] md:text-[1.5rem]">
                <span>&nbsp;{`- A man can't have enough basement swag`}</span>
                <span>&nbsp;{`- A man can't have enough basement swag`}</span>
                <span>&nbsp;{`- A man can't have enough basement swag`}</span>
                <span>&nbsp;{`- A man can't have enough basement swag`}</span>
                <span>&nbsp;{`- A man can't have enough basement swag`}</span>
            </div>
        </div>
    );
}

export default Marquee;
