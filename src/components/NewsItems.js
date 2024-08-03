import React from 'react'

const NewsItems =(props)=> {
    let {title, description, imageUrl, newsUrl,author,publishedAt ,name } = props;
    return (
      <div className='my-3'>
       <div className="card" >
       <span className=" bg-danger badge rounded-pill" style={{position: 'absolute', right: '0'}}>
    {name}
  </span>
            <img src={!imageUrl?"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(publishedAt).toLocaleString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
            </div>
    </div>
      </div>
    )
}

export default NewsItems
