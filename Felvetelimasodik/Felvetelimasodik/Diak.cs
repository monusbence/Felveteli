using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Felvételi
{
    public class Diak:IFelvetelizo
    {

        string omAzonosíto;
        string nev;
        string email;
        DateTime szuletesiDatum;
        string cim;
        int matek, magyar;


        public Diak() { }
        public Diak(string omAzonosíto, string nev, string email, DateTime szuletesiDatum, string cim, int matek, int magyar)
        {
            this.omAzonosíto = omAzonosíto;
            this.nev = nev;
            this.email = email;
            this.szuletesiDatum = szuletesiDatum;
            this.cim = cim;
            this.matek = matek;
            this.magyar = magyar;
            
        }
        public string Email { get => email; set => email = value; }
        public DateTime SzuletesiDatum { get => szuletesiDatum; set => szuletesiDatum = value; }
        public int Magyar { get => magyar; set => magyar = value; }
        public string OM_Azonosito { get => omAzonosíto; set => omAzonosíto = value; }
        public string Neve { get => nev; set => nev = value; }
        public string ErtesitesiCime { get => cim; set => cim = value; }
        public int Matematika { get => matek; set => matek = value; }

        string IFelvetelizo.CSVSortAdVissza()
        {
            
            return $"{OM_Azonosito},{Neve},{Email},{SzuletesiDatum},{ErtesitesiCime},{Matematika},{Magyar}";
        }

        void IFelvetelizo.ModositCSVSorral(string csvString)
        {
            string[] values = csvString.Split(',');

            if (values.Length == 7)
            {
                OM_Azonosito = values[0];
                Neve = values[1];
                Email = values[2];
                SzuletesiDatum = DateTime.Parse(values[3]);
                ErtesitesiCime = values[4];
                Matematika = int.Parse(values[5]);
                Magyar = int.Parse(values[6]);
            }
            else
            {
                throw new ArgumentException("Nem megfelelő csv formátum!");
            }
        }
    }
}
