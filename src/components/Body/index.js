import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const renderLeftNavbar = () => {
        const {showLeftNavbar} = value
        return (
          showLeftNavbar && (
            <div className="navbar-container">
              <h1 className="body-heading">Left Navbar Menu</h1>
              <ul className="list-container">
                <li className="list-item">Item1</li>
                <li className="list-item">Item2</li>
                <li className="list-item">Item3</li>
                <li className="list-item">Item4</li>
              </ul>
            </div>
          )
        )
      }

      const renderRightNavbar = () => {
        const {showRightNavbar} = value
        return (
          showRightNavbar && (
            <div className="navbar-container">
              <h1 className="body-heading">Right Navbar Menu</h1>
              <div className="ads-container">
                <div className="ad-container">
                  <p>Ad 1</p>
                </div>
                <div className="ad-container">
                  <p>Ad 2</p>
                </div>
              </div>
            </div>
          )
        )
      }

      const renderContent = () => {
        const {showContent} = value
        return (
          showContent && (
            <div className="content-container">
              <h1 className="body-heading">Content</h1>
              <p className="content-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )
        )
      }

      return (
        <div className="body-container">
          {renderLeftNavbar()}
          {renderContent()}
          {renderRightNavbar()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
