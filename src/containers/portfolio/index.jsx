import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { MdCreateNewFolder } from 'react-icons/md'
import { filterOptions, portfolioData } from "./utils";
import { useState } from "react";
import "./styles.scss";

const Portfolio = () => {
    const [filterValue, setFilterValue] = useState(1);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleFilter = (id) => {
        setFilterValue(id);
    }
    const filteredPortfolioData = filterValue === 1 ? portfolioData :
        portfolioData.filter(item => item.sectionId === filterValue);

    return (
        <section className="portfolio" id="portfolio">
            <PageHeaderContent
                headerText="my work"
                icon={<MdCreateNewFolder size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterOptions.map((option) => (
                            <li 
                            onClick={() => handleFilter(option.id)} 
                            key={`filter${option.id}`}
                            className={option.id === filterValue ? 'active' : ''}
                            >
                                {option.label}
                            </li>
                        ))
                    }
                </ul>

                <div className="portfolio__content__cards">
                    {
                        filteredPortfolioData.map((item, key) => (


                            <div
                                onMouseEnter={() => setHoveredIndex(key)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                key={key} className="portfolio__content__cards__item">
                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a>
                                        <img src={item.image} alt="project image" />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        hoveredIndex === key && (
                                            <div>
                                                <p>{item.projectName}</p>
                                                <a href={item.projectLink} target="blank"> 
                                                    <button>visit here</button>
                                                </a>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>
        </section>
    );
};

export default Portfolio; 