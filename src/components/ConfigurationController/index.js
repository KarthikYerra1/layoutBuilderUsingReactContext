import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="configuration-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="checkboxes-container">
            <div className="checkbox-container">
              <input
                type="checkbox"
                value={showContent}
                checked={showContent}
                onChange={onChangeContent}
                id="content"
                className="checkbox"
              />
              <label htmlFor="content" className="checkbox-label">
                Content
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                value={showLeftNavbar}
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
                id="leftNavbar"
                className="checkbox"
              />
              <label htmlFor="leftNavbar" className="checkbox-label">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                value={showRightNavbar}
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
                id="rightNavbar"
                className="checkbox"
              />
              <label htmlFor="rightNavbar" className="checkbox-label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
