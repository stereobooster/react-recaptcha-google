import React, { Component } from 'react';
import { ReCaptcha, loadReCaptcha } from '../src';

class ExampleReCaptcha extends Component {
  constructor(props, context) {
      super(props, context);

      this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
      this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentDidMount() {
    if (this.captchaDemo) {
        this.captchaDemo.reset();
        this.captchaDemo.execute();
    }
  }

  onLoadRecaptcha() {
      console.log(this.captchaDemo)
      if (this.captchaDemo) {
          this.captchaDemo.reset();
          this.captchaDemo.execute();
      }
  }

  verifyCallback(recaptchaToken) {
      console.log(recaptchaToken)
  }

  render() {
    const captchaKey = 'your_key';

    return (
        <ReCaptcha
            ref={(el) => {this.captchaDemo = el;}}
            size="invisible"
            render="explicit"
            sitekey={captchaKey}
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />
    );
  }
}

export default ExampleReCaptcha;
