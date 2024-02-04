using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Felvételi
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class userAdd : Window
    {
        private Diak masikDiak;
        public userAdd(Diak diakFelvetel, bool szerkesztes = false)
        {
            InitializeComponent();
            masikDiak= diakFelvetel;
            if (szerkesztes)
            {
                txtNev.Text= masikDiak.Neve;
                txtOmAzon.Text = masikDiak.OM_Azonosito;
                txtEmail.Text = masikDiak.Email;
                txtMatekJegy.Text= masikDiak.Matematika.ToString();
                txtMagyar.Text= masikDiak.Magyar.ToString();
                txtertesites.Text = masikDiak.ErtesitesiCime;
                txtSzulDatum.Text = masikDiak.SzuletesiDatum.ToString();
            }
        }
        private void mentes_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                try
                {
                    string nev = txtNev.Text;
                    string ertesites = txtertesites.Text;
                    string email = txtEmail.Text;
                    string omAzon = txtOmAzon.Text;

                    if (string.IsNullOrEmpty(nev))
                    {
                        throw new Exception("Kérlek add meg a nevedet!");
                    }

                    string[] nevReszek = nev.Trim().Split(' ');
                    txtNev.Text = nev.Trim();
                    if (nevReszek.Length < 2 || Regex.IsMatch(nev,".+  .+") || nevReszek.Any(s => char.IsLower(s[0])))
                    {
                        txtNev.Focus();
                        throw new Exception("A névnek legalább két szóból kell állnia, és mindkét szó nagy betűvel kezdődjön!");
                    }

                    if (string.IsNullOrEmpty(omAzon) || omAzon.Length != 11 || omAzon.Any(x => !char.IsNumber(x)))
                    {
                        txtOmAzon.Focus();
                        throw new Exception("Az OM Azonosítónak 11 karakter hosszúnak kell lennie és csak számot tartalmazhat, ennek megfelelően add meg!");
                    }

                    try
                    {
                        Convert.ToDateTime(txtSzulDatum.Text);
                    }
                    catch (Exception)
                    {
                        txtSzulDatum.Focus();
                        throw new Exception("Mikor születtél?");
                    }

                    try
                    {
                        Convert.ToInt32(txtMatekJegy.Text);


                        int matek = Convert.ToInt32(txtMatekJegy.Text);

                        if (matek < 0 || matek > 50)
                        {
                            txtMatekJegy.Focus();
                            throw new Exception("Rosszul adtad meg a matek pontszámát!");
                        }
                    }
                    catch (Exception)
                    {
                        txtMatekJegy.Focus();
                        throw new Exception("Rosszul adtad meg a matek pontszámát!");
                    }

                    try
                    {
                        int magyar = Convert.ToInt32(txtMagyar.Text);

                        if (magyar < 0 || magyar > 50)
                        {
                            txtMagyar.Focus();
                            throw new Exception("Rosszul adtad meg a magyar pontszámát!");
                        }
                    }
                    catch (Exception)
                    {
                        txtMagyar.Focus();
                        throw new Exception("Rosszul adtad meg a magyar pontszámát!");
                    }

                    if (string.IsNullOrEmpty(email) || email.Count(x => x == '@') != 1 || email.Contains(' '))
                    {
                        txtEmail.Focus();
                        throw new Exception("Kérlek add meg a email címet, szabályos formában! 1db @");
                    }


                    if (string.IsNullOrEmpty(ertesites))
                    {
                        txtertesites.Focus();
                        throw new Exception("Kérlek add meg a értesítési címet!");
                    }


                    masikDiak.Neve = txtNev.Text;
                    masikDiak.OM_Azonosito = txtOmAzon.Text;
                    masikDiak.Email = txtEmail.Text;
                    masikDiak.Matematika = int.Parse(txtMatekJegy.Text);
                    masikDiak.Magyar = int.Parse(txtMagyar.Text);
                    masikDiak.ErtesitesiCime = txtertesites.Text;
                    masikDiak.SzuletesiDatum = DateTime.Parse(txtSzulDatum.Text);

                    this.Close();
                }

                catch (Exception ex)
                {
                    throw;
                }
            }
            catch (Exception ex)
            {
                lblresponse.Content = ex.Message;
            }

        }
    }
}