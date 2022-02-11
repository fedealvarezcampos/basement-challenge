function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="animate-marquee whitespace-nowrap border-y-2 border-solid border-white py-3 text-3xl">
        <span>&nbsp;{`- A man can't have enough basement. swag`}</span>
        <span>&nbsp;{`- A man can't have enough basement. swag`}</span>
        <span>&nbsp;{`- A man can't have enough basement. swag`}</span>
        <span>&nbsp;{`- A man can't have enough basement. swag`}</span>
        <span>&nbsp;{`- A man can't have enough basement. swag`}</span>
      </div>
      <div className="animate-marquee2 absolute top-0 whitespace-nowrap border-y-2 border-solid border-white py-3 text-3xl">
        <span>&nbsp;{`- A man can't have enough basement. swag`}</span>
        <span>&nbsp;{`- A man can't have enough basement. swag`}</span>
        <span>&nbsp;{`- A man can't have enough basement. swag`}</span>
        <span>&nbsp;{`- A man can't have enough basement. swag`}</span>
        <span>&nbsp;{`- A man can't have enough basement. swag`}</span>
      </div>
    </div>
  );
}

export default Marquee;
