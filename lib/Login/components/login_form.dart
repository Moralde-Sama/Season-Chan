import 'dart:ffi';

import 'package:flutter/material.dart';

class LoginForm extends StatelessWidget {
  Widget _inputComponent({String labelText, bool isPassword = false}) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 10),
      child: TextField(
        obscureText: isPassword,
        decoration: InputDecoration(
            enabledBorder: UnderlineInputBorder(
                borderSide: BorderSide(color: Colors.white)),
            labelText: labelText,
            labelStyle: TextStyle(fontSize: 18)),
        style: TextStyle(color: Colors.white),
      ),
    );
  }

  Widget _buttonComponent({BuildContext context, String labelText, Function onPress}) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 40),
      child: RaisedButton(
        onPressed: onPress,
        color: Theme.of(context).primaryColor,
        textColor: Colors.white,
        child: Text(
          labelText,
          style: TextStyle(fontSize: 20),
        ),
        shape: RoundedRectangleBorder(
            borderRadius: new BorderRadius.circular(18.0)
        ),
      ),
    );
  }

  void _loginHandler() {}
  void _guestHandler() {}

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(bottom: 20),
      child: ListView(
        shrinkWrap: true,
        padding: const EdgeInsets.all(8),
        children: <Widget>[
          _inputComponent(labelText: 'Username'),
          _inputComponent(labelText: 'Password', isPassword: true),
          SizedBox(height: 10),
          _buttonComponent(
            context: context, 
            labelText: 'Login',
            onPress: _guestHandler),
          _buttonComponent(
            context: context, 
            labelText: 'Guest',
            onPress: _loginHandler)
        ],
      )
    );
  }
}
