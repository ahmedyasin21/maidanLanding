export default function AvanueList() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="product">
                            <figure className="product-media">
                                <a href>
                                    <img src="data:image/jpeg;base64,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" alt="Category" />
                                </a>
                                <div className="product-label-group">
                                    <label className="product-label label-new">10% off</label>
                                </div>
                                <div className="product-action-vertical">
                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart" /></a>
                                </div>
                            </figure>
                            <div className="product-details">
                                <h3 className="product-name mb-1">
                                    <a className="d-block" href>Box Complex Johar Town</a>
                                    <span>Islamabad Pakistan</span>
                                </h3>
                                <ul className="mb-1">
                                    <li>
                                        <span>
                                            <i className="d-icon-bed" />
                                        </span>
                                        Parking, Change Room, Water
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4 className="m-0 f-7">
                                            Rs.8000 to 50000
                                        </h4>
                                        <span className="f-5">
                                            Available
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <h4 className="m-0 f-5">
                                            <i className="d-icon-star-full" />
                                            4.0
                                        </h4>
                                        <span className="f-5">
                                            2 reviews
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="product">
                            <figure className="product-media">
                                <a href>
                                    <img src="data:image/jpeg;base64,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" alt="Category" />
                                </a>
                                <div className="product-label-group">
                                    <label className="product-label label-new">10% off</label>
                                </div>
                                <div className="product-action-vertical">
                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart" /></a>
                                </div>
                            </figure>
                            <div className="product-details">
                                <h3 className="product-name mb-1">
                                    <a className="d-block" href>Box Complex Johar Town</a>
                                    <span>Islamabad Pakistan</span>
                                </h3>
                                <ul className="mb-1">
                                    <li>
                                        <span>
                                            <i className="d-icon-bed" />
                                        </span>
                                        Parking, Change Room, Water
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4 className="m-0 f-7">
                                            Rs.8000 to 50000
                                        </h4>
                                        <span className="f-5">
                                            Available
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <h4 className="m-0 f-5">
                                            <i className="d-icon-star-full" />
                                            4.0
                                        </h4>
                                        <span className="f-5">
                                            2 reviews
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="product">
                            <figure className="product-media">
                                <a href>
                                    <img src="data:image/jpeg;base64,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" alt="Category" />
                                </a>
                                <div className="product-label-group">
                                    <label className="product-label label-new">10% off</label>
                                </div>
                                <div className="product-action-vertical">
                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart" /></a>
                                </div>
                            </figure>
                            <div className="product-details">
                                <h3 className="product-name mb-1">
                                    <a className="d-block" href>Box Complex Johar Town</a>
                                    <span>Islamabad Pakistan</span>
                                </h3>
                                <ul className="mb-1">
                                    <li>
                                        <span>
                                            <i className="d-icon-bed" />
                                        </span>
                                        Parking, Change Room, Water
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4 className="m-0 f-7">
                                            Rs.8000 to 50000
                                        </h4>
                                        <span className="f-5">
                                            Available
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <h4 className="m-0 f-5">
                                            <i className="d-icon-star-full" />
                                            4.0
                                        </h4>
                                        <span className="f-5">
                                            2 reviews
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="product">
                            <figure className="product-media">
                                <a href>
                                    <img src="data:image/jpeg;base64,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" alt="Category" />
                                </a>
                                <div className="product-label-group">
                                    <label className="product-label label-new">10% off</label>
                                </div>
                                <div className="product-action-vertical">
                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart" /></a>
                                </div>
                            </figure>
                            <div className="product-details">
                                <h3 className="product-name mb-1">
                                    <a className="d-block" href>Box Complex Johar Town</a>
                                    <span>Islamabad Pakistan</span>
                                </h3>
                                <ul className="mb-1">
                                    <li>
                                        <span>
                                            <i className="d-icon-bed" />
                                        </span>
                                        Parking, Change Room, Water
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4 className="m-0 f-7">
                                            Rs.8000 to 50000
                                        </h4>
                                        <span className="f-5">
                                            Available
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <h4 className="m-0 f-5">
                                            <i className="d-icon-star-full" />
                                            4.0
                                        </h4>
                                        <span className="f-5">
                                            2 reviews
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="product">
                            <figure className="product-media">
                                <a href>
                                    <img src="data:image/jpeg;base64,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" alt="Category" />
                                </a>
                                <div className="product-label-group">
                                    <label className="product-label label-new">10% off</label>
                                </div>
                                <div className="product-action-vertical">
                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart" /></a>
                                </div>
                            </figure>
                            <div className="product-details">
                                <h3 className="product-name mb-1">
                                    <a className="d-block" href>Box Complex Johar Town</a>
                                    <span>Islamabad Pakistan</span>
                                </h3>
                                <ul className="mb-1">
                                    <li>
                                        <span>
                                            <i className="d-icon-bed" />
                                        </span>
                                        Parking, Change Room, Water
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4 className="m-0 f-7">
                                            Rs.8000 to 50000
                                        </h4>
                                        <span className="f-5">
                                            Available
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <h4 className="m-0 f-5">
                                            <i className="d-icon-star-full" />
                                            4.0
                                        </h4>
                                        <span className="f-5">
                                            2 reviews
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="product">
                            <figure className="product-media">
                                <a href>
                                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGRgYHBgYHBocGBgYGBgZGhgZGRoZGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGBIRGjEdGB0xMTQxMTQxNDQ0NDExMTE0NDQxMTQ0MTExND8xMTExMTE0PzExMTExMTQxNDExNDExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABAECAwUGB//EAD0QAAEDAgQDBgMHAwMEAwAAAAEAAhEDIQQSMUFRYXEFIoGRobETwfAGMlJictHhFEKyFZLxM1SCkwcjQ//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIxEBAQEAAwACAgIDAQAAAAAAAAERAhIhAzETQVFhIjJxBP/aAAwDAQACEQMRAD8A+YoQhFCEIQCAhTCCFKshAKsKYUwgEIhSghRCkBEIIhEKyEEQiFMIhAKIUohBEIhWhEIIhCmEQgiFMKYVgEFFMKYUwqKIV4QgXQhCgFKhSgIRCspREIhTCsxhNgCTwFz5IKqWtXRwvZD3kSWtBIBk5i0HfI2TzXtuxPsrQZ3ntNR0SA85GA82iSR1TWeXPjx/2uPnRpu4HiLajiqwvoP2gwVN+LYwyGfCLsrGsDGGwhgymR1XIxH2dbHcdJmZIykDgC0kQf0o5/n4bmvKwphPVuzXtNxvc6gC0cydZtwWFWhlAMgyJI3bDi2D5T4prtOUv0XRC0fTI1CiEVWFBCvCIQVhEK4apDVRQBACvlQGoKwphSWqQ1BAagBXDVYNRWeVTlW2VWLFcC+RC3+GhMHNRCELKNKdFzoDWkzpAmVDmEGCIItHBeo+yvYj67ixr/hPazPL5ALHOi2pJ8l1cR/8bV7uZXpP3tmHqVNYvPj/AC8GxsmB+3urinzG+l4Xaxn2WxFL7zJ6XSDsA9urSFVnKX6qlPDN/E0dT8hEeZXTw1OmB3qh2syG6SLuPU7Lm/AI1V20UxOXv7enwGJYyzGtA6gk7XOui6TcY4Ad4acV5BlIQjE2bzUkebl8E5X2u5/9rsWMgJd8O2hsSea7LMFiXa0yfJeBLe8eg9Sm6biNC7wJVxb/AOfjk163E9lVbzSPouNieyzJzMPoua8k6kqjmD6MqdW+Pxzj9LPwgFxbX1SdSiOP1zW5pqgprUjrx/6XdRjcLMsTT2Kvw0bL5EBqY+GrfDVCoar5U02ltCDSGiBXKrBi2+HeyMvJMVllWjaa0axMMpphrAU5hT8K6cZQutzh/VXGdc3J9XQur/QHmhXDXj8q3wzJcJ0XoqvYuHd/0qs8jY+qVrdkuY1xBFgT6LjscvySzw7h+0Sx5cDoxrB0zOKfZ246JDiDyN15p9NwcRvlafVyrcJjlfiluvUn7Sv/AL4fpc6+aq/tWk8wRlPPTzXm2vUyr1X8WfTt1GU3aR4bLF2DbfKfNc6mDNk3TqkalXqvXlP21OFhKYqlAP1unG4ixPssK75bodtYG61izSYpnMegWrGFaNDi91htv81s0EatPgQVXS0tkV8nFa5hzHgVZmU7jzUxnS3w1LKXHZPNo2J91FRoAFjfwRdc80yVU0jom6jiNBCXySmNSqBg/wCLq7GLanS2TlLDSNFTSDKd54KjqYXWfhyGgcUnVYBYIaUqM9kMYm3sFv0tUtpI1rNlKdP2TFGjJWtGkuhhqHJIzqmGwV5TFPA94nUarvdm9kOdoLdQujiexy1pgTxhOy48t8IIXV/048D6qU7GPlgeStX4twaRmIkEQTbhaUqyOM+P7LQtEGANNbLnjneMdLA0qr5exheDlZIIGlz942EEcltVwuUw8CeAhxG1yLeSX7KqOaX94iQ0QDF+9B8rLf425M9VK6ThPtVmFbvrw28f4VqeHbPy1RntZMYVhN76qdquRlWwUOtJFvqyYw2AmRlHumH0yX77eK9h9n+xw8ZnWA1XTcjnm146phSAB5pLE07W4geq9x9ouyshtoV5irhdOo35rUupZlK4bCmHTrLfVsor0MvFe1+zHZbH5s99LcbQEl9puzWMeYPhwU31qzx455J2+pW1OlmsfkmRRA3TuFoCRqd9FWZV+z+xi8WEpftDB5DvIX0XsLIKcCJ3uJ915v7TvYXnKB4LMvrdkx4d1A8fNDKB4hdJ4OzUMaeAHUgLTOl6FAzsvZdidgZxmNguFh4kS9gjnmPkF7PsbtKkxkF8/wDjAnks8v6XjXnu3uynMdEWOkcF5p+FjwXrvtD2ox5MEwvLVMUz829tFYW/wyNFsAzeSD4BsH1cP/Fb08M3ilnYoSbEiGxfkFZuMGzG9TdUdTD0GSunRYwH915oYt0218YTuFe7Un19lR9H7Jewshq3xeKaxpny4rx+D7QyNmbm2qyxvaLjc8Fz61vXb/1UfhHkoXl/64oTqa+YBTP1KA1TAjUz6R1QM4OsWk/Wkpr4wPH04fwufSuU/RoyNTv4XUrUN4Z9v5XQwr4PRI0mARwTmGjzMLJjZ+McKkDY/Jet7J7YNJkkzO3VeKfOdzgNDH8wrVMWQB1t4cV1k2OV2Xx6vtvtU1ND7QvM1sS42tqEvUxO0ysn1vfyVkwzXoeyu2n0yS15EkA3JSmP7Ze9xJddcYVfcLF77pi4dfjH/iWtDEONyfQLmtB8Fqx97Kl4x6XD9qFoAmJ8vJIYvGudMn1XOOI73RYmuomVpUqLMPWTnqwdGqLhzDvy3+gukzFkZQuNTqX28gY9EGsS7+AELxdPE4iZukHvVHVzra5Ow5X0WTqp+oQ48V86lr+KWFQybrWm4zclGsO0STouhQDuB8iuR8XmmcNWi5Onims2OvXrkQ2NFGNxBOn1crjmvJmVOIryUtMM/H6eiFzfioQx56UEqZA6qpK5tLsN/JOUnO2MJIRNuS6LKHPXlKlai4zx9716p/BscCJNus8IskqdCDrpxXRoHTRS0pStXOd14usKtaTZY4h/fd1WJeuvG+M4cbU5qPiX8UrnQXpphkVblRnul2v1U5k0MZxpJ+W3P6srMf6afXgl2iZ5CdQPdBdCaNS8qM6xLkB6aGWvhpBAmRBM5hE6Xi/MFT/UDLlyNn8XfzRw+9HolC9RmTVNNeoLysC5QXhNDVR4k5ZjaR3o2lZ51iXozKaNWvVviLAOUByuhtj0wakBINetWV4IMA8iDBtFxuoY3z6LRwOpgCCRO8WIHO6Vnu5g8TMZbz10iFJxTiMsgtaHQDcCdSOeiaYn4qEt8RCbTCJRNk0H/kZ/tCtVgsd3WiMugjdY1CbdVoajuJ81Sj94dR7oqG56lUXFZ34itm4x4/uKjE4RzMkkS4EwDJERryMiOhS6TKrV7yTJN1UFVlS069FpFsysHaLKVZRVg7VTKiiL3HH2VU1Ggcpe+eX1/CylEoGW0XESAI4yN7LSphHhoOSwFyIdr00VWNmmOU+4KZqHuHax/wAJWLyqEfhu4KPhu4FMPNvA/wCJXX7XqMOGwrQBmBcTAv8AetKdvWo4JY7goyHgtHD2+RT/AG85hfTyRAo0wY/FBzTzV7EcwMKCCpb81R5V1QPmiVSblRKqNWuRmKzzKCgaqOc3uOtlJtaZ+awc5UzIzILZlKyQg67uzoY0hwLiJI0DdgM2hKXrUCGG1yW8OPVOMrPnKXdwl0NjSNI9fNXxDe7tq3/JeftZfUvJx6WGfmNvuls3HAHitH9nv1ixmDIg8b76hdLDN79WwjM3YfhCbLZ1PzTl8nrNriYmlUOXPcNAaNLCdLdVX+hfy811sSyzf1t900GBPyZDXCodmVHuDGiSdhra59ArY3sx9J7mOgHUXmRxsu4cK4tc9n9sE6SdbCd04+ix1Cm8tGck5nQTMGInbZanyWzWpmf28d/Sv4LXD0Hl7W5C4ybDhueg8gu6aIC2wDW06rHvDQwteA57S5mbu7RrEpx+XtcScnmY77v1P+aoxo5rrYVgfndqC98WtE7WsFo7AtOw8EvySU7RyMo4KsCJXTd2c3iR4rJ/Z35vMLU+TibCrH2I5E+o/f0VzigWkHUgi36YTWAwBD73BBiCJJsRY9FXtXBgPGRjgIuOfGAZ0V2Vrr5pQ1xH1wKgVxwP0Vi5kWII5EQVZsJkRJq8j9StKdSSbfi+aysrsET0PPZFZtejOoBQtChN/FShp1UhyaDxRHMeaCUWQAYeCgtKvS18Dy2WzcOLd47DTiJTQrCE9/S/nPkhNHXmVjiPuj9TfdQXzr7QsqtUwB+ZsacV5JPWMXwTxNQGS7P0HOQmsh1APkkcDWgvMkS87lNmpzPury+yqYhphv627RxToaRw9NfFc/En7l/72/O63c87Kcp4jetiA0NYajQS490i5kAC49k415yBhfLBcC0STJ52vquDiaZc4EzaAOI7wMzxsE47EEiMsHUkb8NvmtzOq4d+ENj7JHHUxnYAQZD+NtPqVLXn8UfXJYuefiNP5X8eIWOPlJ9m+xqTThS+Lmq4TvFt1ew4rn9k1D8OJtmcYkxM6wnc4Tlf8qVfMOCjMEZ+HzWZv9fNZRnjKhawuacrhEEaiSAqYd7iDndmcCRJN7aLR9OR9bfXoqEEc/L0WpfMX9Y025cLQsH4dp1a0+EeykvKM4SWm0u/Bs2aR0M+hSmIoNZo6SbQdb7hdYHn7/uuPj3d8+HhZdOFtqxrXwAzHI6W2jNZ2gn1lYnBP/DPQgrq4WoGsylozaZj3rQIidCqGFe1jWuMGETINjClrCdBPRdHDEy+DHePsExnIY46XbJFiR3tSPBa7ejlNwjz/Y//AGmPOFc4B+4A6vYPQmVLiXE3d0kphmEY4SCfdavLFwuzCQTL2aH+4km3IK7HG3d4Xg8N0wcPlJuLiOC57WmYE2MFN0dDOfqEJHI7g5CBwP4FZ1HG3ULmUqxb04GY910HVWPiLGRrcb7i/mPFY6ZWVsK/73NxTIB+ik8NMExPeN9pTGYgAnSwHtos8p6mJrGSz9Y9imGuIXPfWBc0cHSfIq1TGQY/45qXjaWOgapIAJMTIGw4qjTcWS9KtaTE8OCBU46dLqdUw0/kD5fsl6rnZxBH3HXvy5qRX0+o9Uu9/eJ/IVeM9JGvZriGDqU2X2Oq5/Z7+4AeKYe8jn9cE5T0sb/GP1+6u2oTBS2e0XVS8aAnzlZ6mHDV4qM6UzReVGc7J1MMueoL0s56zL1eq4cdE/8AK5legS8u/M3ygJtkxJgN4nfjA3Q6o3YGJ5D91rj4qXPPFNYagHtqPn7gBiBcmf2SOccB4k/JPYLEtbTqtMAvygDpmnU80oQpPgu27x6aBO4d8seOMDpZ/wDCQpkd64u42vwG+iZwzrxl1LeOwcVf2pbDMBzTsPN0iAB5rXCOsevE/JbYVmV5mLki+2uonms6Ud7a58vFav0qa+xnksHMgk7m56wta2nWI/i6xffLpcDePNJ9C39UeXkhH9F+dn+8IQcYK0xoqhbMZ3ZiZXSovQxbmAgEiZ9UPrS0C8g2M2jhHGd1k5g6H0VQpkFy8zKl23X3VC5FM3CWI6XxIVhVGiTzCCSdOBAMnSAdVgHnWVnqOlMrJ7jJ/SqsfKo99z+mFJPQxgz3Bbj7rW3FK4d8MC1FVSwauJ49FUj63WbnqWvjaVMGx8+v8Kpnn8ln8RRnneEwWLygGVRWYDsD7qhkvztaJ7zBlANgQTIg8eqVe0jUELVuHfuI6wB66LSY+89hHAy//EEIFi7mokrao6l+f0aPAkuKzdiKQ0bPUuJ9AArgox1z1Ke7PfJ+445XAkiZMtcBdc+niDBDWkkkmyg1qg1OWeZ9hJVxT+PqDMdQXXg6yDufDgjDMlpcXMbH4nQT+kDVc+pLrue5x6QPNxB9FUUuR8ZPtZXxTdWqwavnoJ9rFFPG08zZYSACDoZ6A6JdtLiB1hbjKNoUtgf/ANRw3/b1PNn7IXPlv1KlZ0c59PLuCOIMgo+IVQFQ5dUWLpUFQFJCohSFCs0IJKqrqC1RG2HAg94Drp57IeDe22u2954cwsmOi9rq2ciRpI8Cpg0YDlFj5FWzLNlSBZWdiXHifIJYNGMcdGn66qwZGrmjxn/GUuXOOvqVE/m8lMDZyDV5J5NgeZPyQMRTH9s9XT/ilSwcz1Vg0HYJgYdjvwtHIht/Mqxx78sZb8cxBjo2yWOb/iFk4ncckyK2c925A6XUATq4n0WJcgfV0wbADgOqGOjgPmsy1QG89FcUw295+S0ZS4EjyS7HAET/AB6KwqGY1UoZEcvQKwdxKmnRc5uaDrGhIXQw+Cbq4zfRgLrRxt7LFVzns5q39K4CfQ2PrY+a7mEFF0ZmNAuwkPhwOxLdlTF1Q3uuEwImC4cjI+YUHH/o3cPUfuhN/wCq9P8Ab/CEHmgpcFCkLuyhSSoRCCFaVCIQSCpBVVZrZMe6iJIEa76R6qAoUgoJE7Iy81s+iW3iPIFVbVPXy+aKoAtWkI+J9bqriNgg0AhTCwzQrZ+SzitSEZoWYerAJipLTujIDspIHH3RmlEXZTnTb68Vb4YtM8/oqrWnQSg03G8bwTv5IrWk1lgfGdvJBa1plhNjwtCyNF2109hmPa5sxPEQCBFxtwjjdBpSDSxzhrI1OXy2WzIcMrsrRmAktzBp4l3qky9pMN7pLgNSOljonzThzsroOggCDA0M7dVkaOtn77C+Q5sd0PHjYjxWbsWYIkx95oLSQZ2uU1SpU3EN7ozi/cLDPhZLsyMcczgQ05YJJzbDLHgmKX/1Z34Wf+sIW0M4nzf+6ER5VCELqyEIQgEIQgFIQhAbqDqpQojo4v7jfBJoQis3arqYr/pU+p+SEIOc5AQhBFNatQhZVJQVCEDuH08PkqDUoQhG+H+54n2CZb/+fVyEIVm/7o/X80w/+79TVKFFPdq/fZ0Smx6n3QhQVQhCD//Z" alt="Category" />
                                </a>
                                <div className="product-label-group">
                                    <label className="product-label label-new">10% off</label>
                                </div>
                                <div className="product-action-vertical">
                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><i className="d-icon-heart" /></a>
                                </div>
                            </figure>
                            <div className="product-details">
                                <h3 className="product-name mb-1">
                                    <a className="d-block" href>Box Complex Johar Town</a>
                                    <span>Islamabad Pakistan</span>
                                </h3>
                                <ul className="mb-1">
                                    <li>
                                        <span>
                                            <i className="d-icon-bed" />
                                        </span>
                                        Parking, Change Room, Water
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4 className="m-0 f-7">
                                            Rs.8000 to 50000
                                        </h4>
                                        <span className="f-5">
                                            Available
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <h4 className="m-0 f-5">
                                            <i className="d-icon-star-full" />
                                            4.0
                                        </h4>
                                        <span className="f-5">
                                            2 reviews
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}