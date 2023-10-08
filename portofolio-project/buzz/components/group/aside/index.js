import "./aside.css";

export default function Aside({ children }) {
  return (
    <div className="aside">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus
        molestie purus a consequat. Proin nunc purus, mollis a porta sed,
        molestie vel felis. Maecenas rutrum posuere cursus. Sed scelerisque
        posuere sodales. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Aliquam nec sapien lobortis, ultrices
        mauris at, mollis turpis. Sed egestas tortor ut nulla condimentum
        luctus. Curabitur fringilla nulla nunc, nec porta orci venenatis
        suscipit. Maecenas congue nunc nec sodales consequat. Donec cursus magna
        at ex egestas, sed aliquet est ornare. Donec nec molestie turpis.
        Vestibulum laoreet, mauris in imperdiet malesuada, turpis nibh tempor
        lacus, non pharetra lacus mi eu augue. Nulla suscipit odio at
        felisornare posuere. Nulla vitae tristique tellus.
        {children}
      </p>
    </div>
  );
}
